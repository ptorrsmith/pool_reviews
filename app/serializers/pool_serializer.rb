class PoolSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug, :avg_score #, :id  # here control what attributes are serialized

  has_many :reviews
end
