deploy:
	s3cmd sync --add-header=Expires:max-age=604800 --exclude '.git/*' --acl-public _site/ s3://tylercipriani.com/

.PHONY: deploy