class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :pool_id
end
