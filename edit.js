function submit() {
    if (!document.getElementById('botid').value)
        return flash(document.getElementById('botid'))  
  if (!document.getElementById('mcolor').value)
        return flash(document.getElementById('mcolor')) 
  if (!document.getElementById('mimage').value)
        return flash(document.getElementById('mimage'))
    if (!document.getElementById('prefix').value)
        return flash(document.getElementById('prefix'))
    if (!document.getElementById('short').value)
        return flash(document.getElementById('short'))
     if (!document.getElementById('sinvite').value)
        return flash(document.getElementById('sinvite'))
    if (!document.getElementById('longdesc').value)
        return flash(document.getElementById('longdesc'))

    let data = {
        token: localStorage.getItem('token'),
        id: document.getElementById('botid').value,
        prefix: document.getElementById('prefix').value,
        short: document.getElementById('short').value,
        invite: document.getElementById('invite').value,
        owners: document.getElementById('owners').value,
           sinvite: document.getElementById('sinvite').value,
        long: document.getElementById('longdesc').value,  
      mimage: document.getElementById('mimage').value,
      mcolor: document.getElementById('mcolor').value
       };
    var url = `${window.location.origin}/modify`;
    var form = $(`<form action="${url}" method="post">
<input type="text" name="token" value="${data.token}" />
<input type="text" name="id" value="${data.id}" />
<input type="text" name="prefix" value="${data.prefix}" />
<input type="text" name="short" value="${data.short}" />
<input type="text" name="sinvite" value="${data.sinvite}" />
<input type="text" name="invite" value="${data.invite}" />
<input type="text" name="mimage" value="${data.mimage}" />
<input type="text" name="mcolor" value="${data.mcolor}" />
<input type="text" name="owners" value="${data.owners}" />
<textarea name="long" value="${data.long}">${data.long}</textarea>
</form>
`);
    $('body').append(form);
    form.submit();
}

function flash(element) {
    element.scrollIntoView();
    element.style.border = "2px solid #ff0000";
    element.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    setTimeout(() => {
        element.style.backgroundColor = "rgba(0, 0, 0, 0)";
        element.style.border = "1px solid #888";
    }, 600)
}

$( document ).ready(function() {
    let botId = location.href.split(location.host)[1].replace('/bots/edit/', '').replace('/', '');
    $('#auth').click(() => {
        fetch(`/api/auth/${botId}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: 'Your authorisation token',
                    icon: 'success',
                    html:
                      `Your authorisation token is <code>${data.auth}</code>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Close',
                    confirmButtonAriaLabel: 'close',
                  })
            } else {
                Swal.fire({
                    title: 'Your authorisation token',
                    icon: 'error',
                    html:
                      `There was an error with your authorisation token.`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Close',
                    confirmButtonAriaLabel: 'close',
                  })
            }
        });
    })
    $('#reset').click(() => {
        fetch(`/api/auth/reset/${botId}`)
        .then(res => res.json())
        .then(data => {
            
            if (data.success) {
                Swal.fire({
                    title: 'Your new authorisation token',
                    icon: 'success',
                    html:
                      `Your new authorisation token is <code>${data.auth}</code>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Close',
                    confirmButtonAriaLabel: 'close',
                  })
            } else {
                Swal.fire({
                    title: 'Your new authorisation token',
                    icon: 'error',
                    html:
                      `There was an error with your authorisation token.`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Close',
                    confirmButtonAriaLabel: 'close',
                  })
            }
        });
    })
})
