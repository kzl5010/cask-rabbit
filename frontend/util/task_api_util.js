export const fetchTasks = () => (
  $.ajax({
    method: "GET",
    url: 'api/tasks'
  })
)

export const fetchTask = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/tasks/${id}`
  })
)
