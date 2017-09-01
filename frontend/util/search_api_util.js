
export const searchSpots = (capacity, sleep_option) => {

  let search_url = '/api/spots/search?'
  if (capacity) {
    search_url = search_url + `capacity=${capacity}`
    if (sleep_option) {
      search_url = search_url + `&sleep_option=${sleep_option}`
    }
  } else if (sleep_option) {
    search_url = search_url + `sleep_option=${sleep_option}`
  }

  return $.ajax({
    method: 'GET',
    url: search_url
  })
}
