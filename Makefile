TOPIC = 'new thing'
FILE = $(shell date "+./_posts/%Y-%m-%d-$(TOPIC).md" | sed -e y/\ /-/)

new:
	echo "---" >> $(FILE)
	echo "title: $(TOPIC)" >> $(FILE)
	echo "layout: post" >> $(FILE)
	echo "published: false" >> $(FILE)
	echo "---" >> $(FILE)
	vim $(FILE)

deploy:
	s3cmd sync --add-header=Expires:max-age=604800 --exclude '.git/*' --acl-public _site/ s3://tylercipriani.com/

.PHONY: deploy post