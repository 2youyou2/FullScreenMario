<style type="text/css">
	table {
		width: 100%;
	}
	
	.method {
		margin-top: 25px;
		font-size: 20px;
		display: inline-block;
	}
	
	.method-section {
		margin-top: 25px;
		font-size: 16px;
		display: block;
	}

	.var-type {
  		color: #fff;
		padding: 1px 5px 2px 5px;
		border-radius: 3px;
	}
	
	.var-type-object {
  		background-color: #aaa;
	}
	
	.var-type-boolean {
		background-color: #bbbb00;
	}
	
	.var-type-string {
 		background-color: #00aaef;
	}
	
	.var-type-all {
		background-color: #dd0000;
	}
</style>

# Captcha Mario

Captcha Mario is a fork project from [fullscreenmario.com](http://www.fullscreenmario.com), a free HTML5 remake of Nintendo's original Super Mario Bros, expanded for the modern web. It includes the original 32 levels, a random map generator, a level editor, and over a dozen custom mods.

Conceptually speaking, the reason behind Captcha Mario is to provide a funny way to validate that forms are being filled by actual users. It integrates an abstraction layer, written in AngularJs, to provide callback methods whenever relevant actions are triggered.

Please note this is NOT intended to be a serious project, so it's not suitable for production environments. Use it at your own risk :).

## Setup

1 - Install Captcha mario using Bower

    bower install git@github.com:rmallols/FullScreenMario.git.
	
2 - Load the ```angularWrapper.js``` directive, located at ```Source/Wrappers```.

3 - Include the ```captcha-mario``` AngularJs module as a dependency of your app.

4 - Include the ```captcha-mario``` AngularJs directive, specifying any of the callbacks described below.

## Wrapper callback methods

<label class="method">`onDead()`</label>

The user could be considered as a *not human*. 

The game is restarted.

<label class="method-section">Parameters</label>

\-

<span class="method-section">Returns</span>

\-

<label class="method">`onLevelComplete()`</label>

Mario has completed the level. The user could be considered as a *human*.

The game is ended.

<label class="method-section">Parameters</label>

\-

<span class="method-section">Returns</span>

\-