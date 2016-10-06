class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :username
      t.integer :property_id
      t.string :content
    end
  end
end
