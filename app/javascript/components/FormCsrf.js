/*
** Form CSRF
*
*  Fetches the CSRF token, generated by Rails, from the page head meta field.
*/
export const FormCsrf = {
  csrfToken
}

function csrfToken() {
  return document.querySelector('meta[name="csrf-token"]')
                 .getAttribute('content')
}
