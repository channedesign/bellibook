class MemoryCard < ActiveRecord::Base

	validates :title, presence: true
	has_attached_file :card, styles: {large: "500x500>", medium: "300x300>", thumb: "100x100#"}
	validates_attachment_content_type :card, content_type: /\Aimage\/.*\Z/
end
