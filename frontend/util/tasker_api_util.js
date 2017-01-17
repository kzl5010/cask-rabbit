export const fetchTaskers = () => (
  $.ajax({
    method: "GET",
    url: 'api/taskers'
  })
)

export const fetchTasker = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/taskers/${id}`
  })
)
