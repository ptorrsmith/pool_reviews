class PoolSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug #, :id  # here control what attributes are serialized

  has_many :reviews
end
