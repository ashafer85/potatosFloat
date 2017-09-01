
export const searchSpots = (capacity, sleep_option) => {
  let search_url = '/api/spots/search?'
  let params = []
  if (capacity) {
    params.push(`capacity=${capacity}`);
  }

  if (sleep_option) {
    params.push(`sleep_option=${sleep_option}`);
  }

  search_url = search_url + params.join('&')

  return $.ajax({
    method: 'GET',
    url: search_url
  })
}
