node-travel-student
===================


npm install

#Steps to set up git and heroku
	git config --global user.email "you@example.com"
	git config --global user.name "Your Name"  
	git config --global credential.helper cache
	git config --global credential.helper 'cache --timeout=3600' 

	# NOTE: will ask for heroku credentials
	heroku login
	heroku keys:add
	heroku create your-app-name-here


#Steps to push to github or to heroku (for deployment)
	git add -A
	git commit -a -m "your commit message here"
	
	# NOTE: this will ask for github credentials
	git push origin master 

	# NOTE: type 'yes' if asked about RSA key
	git push heroku master
		

	