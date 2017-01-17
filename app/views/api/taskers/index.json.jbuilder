json.taskers @taskers.each_with_index do |tasker, idx|
  json.set! idx
  json.partial! 'tasker', tasker: tasker
end
