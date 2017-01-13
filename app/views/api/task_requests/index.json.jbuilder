json.task_requests @task_requests.each_with_index do |task_request, idx|
  json.set! idx
  json.partial! 'task_request', task_request: task_request
end 
