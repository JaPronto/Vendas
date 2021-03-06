<?php

namespace App\Http\Controllers;

use App\Client;
use App\Http\Requests\Client\CreateClientRequest;
use App\Http\Requests\Client\DeleteClientRequest;
use App\Http\Requests\Client\ShowClientRequest;
use App\Http\Requests\Client\UpdateClientRequest;
use App\Http\Requests\Client\ViewClientRequest;
use App\Http\Requests\Client\DisableClientRequest;
use App\Http\Requests\Client\EnableClientRequest;
use App\Http\Resources\ClientResource;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    protected $clientRepository;

    /**
     * ClientController constructor.
     * @param ClientRepository $clientRepository
     */
    public function __construct(ClientRepository $clientRepository)
    {
        $this->middleware('auth');
        $this->clientRepository = $clientRepository;
    }

    /**
     * @param ViewClientRequest $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(ViewClientRequest $request)
    {
        return ClientResource::collection(
            $this->clientRepository->getAll(
                $request->per_page ?? 20,
                true,
                sortedQuery($this->clientRepository, $request)
                    ->where('active', true)
            )
        );
    }

    /**
     * @param ViewClientRequest $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function disabled(ViewClientRequest $request)
    {
        return ClientResource::collection(
            $this->clientRepository->getAll(
                $request->per_page ?? 20,
                true,
                sortedQuery($this->clientRepository, $request)
                    ->where('active', false)
            )
        );
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param CreateClientRequest $request
     * @return ClientResource
     */
    public function store(CreateClientRequest $request)
    {
        return new ClientResource($this->clientRepository->create($request->only([
            'user_id'
        ])));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client $client
     * @param ShowClientRequest $request
     * @return ClientResource
     */
    public function show(Client $client, ShowClientRequest $request)
    {
        return new ClientResource($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateClientRequest $request
     * @param  \App\Client $client
     * @return ClientResource
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        return new ClientResource($this->clientRepository->updateByModel($client, $request->only([
            'user_id'
        ])));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client $client
     * @param DeleteClientRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Client $client, DeleteClientRequest $request)
    {
        if (!$this->clientRepository->deleteByModel($client)) abort(500);

        return response('', 200);
    }

    public function disable(Client $client, DisableClientRequest $request)
    {
        if (!$this->clientRepository->disableByModel($client)) abort(500);

        return response('', 200);
    }

    public function enable($id, EnableClientRequest $request)
    {
        if (!$this->clientRepository->enableById($id)) abort(500);

        return response('', 200);
    }
}
