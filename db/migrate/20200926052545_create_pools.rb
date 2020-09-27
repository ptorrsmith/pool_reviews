class CreatePools < ActiveRecord::Migration[6.0]
  def change
    create_table :pools do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
