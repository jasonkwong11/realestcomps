# Realest Comps

## Project Summary

Realest Comps lets real estate investors judge a potential investment property by providing a list of comps (comparable properties) and each comp's investor-relevant data. 

Get the analytics for your investment property without risking mistakes by crunching the numbers in your head. All data is provided by two Zillow APIs, without the clutter and noise.

Uses a Rails backend to retrieve data from two Zillow APIs and Angular to provide a snappy interface to it. 

## Installation

To run this simply clone or fork it, run `bundle install`, `rake db:migrate` and then `rails s`.

Bower is included in the gem so if you want to add some front end dependencies, add them to the bower.json file and run `rake bower:install`

## Details

**Note: This is the second version of this app. The first effort and the associated commits integral to the making of this version can be found here: https://github.com/jasonkwong11/realesttools


## Future Plans

I plan to add a fully functional property analytics section

## License

MIT

# Contribution Guide

## Status
**READY/IN DEVELOPMENT/HOLD**

## Migrations
YES | NO

## Description
A few sentences describing the overall goals of the pull request's commits.

## Todos
- [ ] Tests
- [ ] Documentation

## Deploy Notes
Notes regarding deployment the contained body of work.  These should note any
db migrations, etc.

## Steps to Test or Reproduce
Outline the steps to test or reproduce the PR here.

```sh
git pull --prune
git checkout <feature_branch>
bundle; script/server
```

## Impacted Areas in Application
List general components of the application that this PR will affect:

## Conclusion

Happy house hunting!