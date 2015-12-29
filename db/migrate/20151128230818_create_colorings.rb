class CreateColorings < ActiveRecord::Migration
  def change
    create_table :colorings do |t|
    	t.string :title

    	t.timestamps
    end
  end
end
