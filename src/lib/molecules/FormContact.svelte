<script>
  import { ButtonContact } from "$lib/index.js";
</script>

<form
  action="mailto:maaike.verplancke@hotmail.com"
  method="post"
  enctype="text/plain"
>
  <label for="name">Voor- en achternaam*</label>
  <input type="text" id="name" name="name" required placeholder="Jan dekkers" />

  <label for="email">E-mail*</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    placeholder="Jandekkers@hotmail.com"
  />

  <label for="message">Notitie*</label>
  <textarea
    id="message"
    name="message"
    rows="4"
    required
    placeholder="Opmerking..."
  ></textarea>
  <ButtonContact />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: var(--darkblue);
    font-size: 0.8rem;
  }

  input,
  textarea {
    width: 100%;
    height: 45px;
    padding: 0.7em;
    border-color: #cccccc;
    border-top: #cccccc;
    border-left: #cccccc;
    border-radius: 10px;
    border-width: 1px;
  }

  textarea {
    height: 100px;
  }

  input:focus,
  textarea:focus {
    opacity: 1;
    border-radius: 10px;
    border: 10px;
    transform: scale(1.01, 1.01);
    outline: none;
    box-shadow: 0 0 0 2px var(--darkblue);
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 80%;
    color: #cccccc;
    font-style: italic;
  }
</style>
