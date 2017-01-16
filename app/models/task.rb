# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  validates :title, :description, presence: true
  has_many :task_requests
end
