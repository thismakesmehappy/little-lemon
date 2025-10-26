const FormError = ({error}) => {
    if (error) {
        return (
            <p className={"form-error"}>{error}</p>
        )
    }
}

export default FormError;