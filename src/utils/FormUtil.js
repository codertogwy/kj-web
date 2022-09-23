const submitForm = async (formEl, success) => {
    if (!formEl) return
    await formEl.value.validate(valid => {
        if (valid && success) {
            success()
        }
    })
}

export {submitForm}