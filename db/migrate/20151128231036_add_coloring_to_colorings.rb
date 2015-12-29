class AddColoringToColorings < ActiveRecord::Migration
  def self.up
    add_attachment :colorings, :coloring
  end

  def self.down
    remove_attachment :colorings, :coloring
  end
end
