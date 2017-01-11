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

require 'test_helper'

class TaskRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
