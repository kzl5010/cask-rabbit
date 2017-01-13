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

class Tasker < ActiveRecord::Base
  validates :name, :email, :zip_code, presence: true

  has_many :task_requests
end
