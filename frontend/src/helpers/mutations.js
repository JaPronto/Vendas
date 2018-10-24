export const commonMutation = (
  {
    confirmTitle = $t('notifications.title.wait'),
    confirmType = 'warning',
    confirmText,
    successTitle = $t('notifications.title.success'),
    successType = 'success',
    successText,
    onSuccess = () => null,
    validationErrorTitle = $t('notifications.title.error'),
    validationErrorText = $t('notifications.message.error'),
    validationErrorType = 'error',
    setValidationErrors = () => null,
    mutate,
    dangerMode = false
  }) => {
  swal({
    title: confirmTitle,
    text: confirmText,
    icon: confirmType,
    buttons: {
      cancel: 'Cancelar',
      confirm: {
        text: 'OK',
        value: true,
        closeModal: false
      },
    },
    dangerMode
  })
    .then(shouldProceed => {
      if (shouldProceed) return mutate()
      return Promise.reject(false)
    })
    .then(() => {
      return swal(successTitle, successText, successType)
    })
    .then(() => {
      onSuccess()
    })
    .catch(e => {
      if (e === false) {
        swal.close()
        swal.stopLoading()
      } else if (e && e.response && e.response.status === 422) {
        return swal(validationErrorTitle, validationErrorText, validationErrorType)
          .then(() => {
            setValidationErrors(e.response.data.errors)

            swal.stopLoading()
            swal.close()
          })
      } else {
        unknownError()
      }
    })
}