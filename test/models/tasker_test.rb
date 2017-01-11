# == Schema Information
#
# Table name: taskers
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  email      :string           not null
#  zip_code   :string           not null
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TaskerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
