window.onload = function() {
  console.log('script loaded');

  // this is translated from jquery, so some of these bugs are straight up unintentional
  // listener for submitting the new mascot form
  document.getElementById('new-mascot-form').addEventListener('submit', e => {
    e.preventDefault(); // stops default behavior of refreshing the page

    // grab values from form
    const name = document.querySelector('.mascot-name-input').value,
      school_id = document.querySelector('.mascot-school-id-input').value,
      image = document.querySelector('.mascot-image-input').value;

    // create new object to send form data in
    const newMascotData = { name, school_id, image };

    // send fetch request to make new Mascot
    fetch('/api/mascots', {
      method: 'post',
      body: JSON.stringify(newMascotData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => window.location.replace('/mascots/' + data.id))
      .catch(err => console.error('fetch new mascot error: ', err)); // end fetch request
  }); // end of event listener

  // listener for submitting the update mascot form
  document
    .getElementById('update-mascot-form')
    .addEventListener('submit', e => {
      e.preventDefault(); // stops default behavior of refreshing the page

      // grab values from form
      const name = document.querySelector('.mascot-name-input').value,
        school_id = document.querySelector('.mascot-school-id-input').value,
        image = document.querySelector('.mascot-image-input').value,
        id = document.querySelector('.mascot-id-input').value;

      // create new object to send form data in
      const newMascotData = { name, school_id, img, id };

      // send fetch request to make new Mascot
      fetch('/api/mascots', {
        method: 'post',
        body: JSON.stringify(newMascotData),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(data => window.location.replace('/mascots/' + data.id))
        .catch(err => console.error('fetch update mascot error: ', err)); // end fetch request
    }); // end of event listener
}; // end of onload
