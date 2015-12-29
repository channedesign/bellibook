class Coloring < ActiveRecord::Base
	validates :title, presence: true
	has_attached_file :coloring, styles: { medium: "2000x2400>", thumb: "100x100#"}, :storage => :s3, :bucket => ENV['S3_BUCKET']
	validates_attachment_content_type :coloring, content_type: /\Aimage\/.*\Z/
end
