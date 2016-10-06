class Property < ApplicationRecord
  has_many :comps
  has_many :comments
end