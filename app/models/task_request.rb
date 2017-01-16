# == Schema Information
#
# Table name: task_requests
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  task_id    :integer
#  tasker_id  :integer
#

class TaskRequest < ActiveRecord::Base
  validates :user_id, :task_id, :tasker_id, :date, presence: true

  belongs_to :user
  belongs_to :tasker
  belongs_to :task
end
