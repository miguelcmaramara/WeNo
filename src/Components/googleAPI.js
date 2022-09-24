
export default function googleAPI() {
  let input = new Date('05 October 2022 14:48 UTC');
  onSub = async () =>{
      let response;
      try {
        const request = {
          'calendarId': 'primary',
          'timeMin': (input).toISOString(),
          'timeMax': (new Date('12 October 2022 14:48 UTC')).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime',
        };
        response = await gapi.client.calendar.events.list(request);
      } catch (err) {
        document.getElementById('content2').innerText = err.message;
        return;
      }

      const events = response.result.items;
      if (!events || events.length == 0) {
        document.getElementById('content2').innerText = 'No events found.';
        return;
      }
      // Flatten to string to display
      const output = events.reduce(
          (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
          'Events:\n');
      document.getElementById('content2').innerText = output;
    }
    //Api request

  }

return(
  <div id = "test">
    <pre id="content2" style="white-space: pre-wrap;"></pre>
    <button onClick={onSub}>Make Request</button>
  </div>
)
    
