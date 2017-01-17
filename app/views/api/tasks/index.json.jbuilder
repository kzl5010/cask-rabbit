json.tasks @tasks.each_with_index do |task, idx|
  json.set! idx
  json.partial! 'task', task: task
end
