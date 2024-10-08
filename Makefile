# Makefile
install:
	npm ci

brain-games: # brain-games
	node bin/brain-games.js

brain-even: # brain-even
	node bin/brain-even.js

brain-calc: # brain-calc
	node bin/brain-calc.js

brain-gcd: # brain-gcd
	node bin/brain-gcd.js

brain-progression: # brain-progression
	node bin/brain-progression.js
	
brain-prime: # brain-prime
	node bin/brain-prime.js

publish: # publish
	npm publish --dry-run

lint:
	npx eslint .
