export default function TodoForm({
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) {
  function handleSubmitJS(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    onSubmit(values)
      .then(() => {
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form onSubmit={handleSubmitJS}>
      <label htmlFor="title">Titre</label>
      <input defaultValue={defaultValues?.title} name="title" id="title" />
      <input type="submit" value={submitButtonLabel} />
    </form>
  );
}
