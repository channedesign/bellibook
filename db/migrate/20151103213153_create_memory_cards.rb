class CreateMemoryCards < ActiveRecord::Migration
  def change
    create_table :memory_cards do |t|
    	t.string :title
    	t.attachment :card

      t.timestamps
    end
  end
end
