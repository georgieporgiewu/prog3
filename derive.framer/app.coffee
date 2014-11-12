# This imports all the layers for "test_derive" into test_deriveLayers2
HomeLayers = Framer.Importer.load "imported/test_derive"

# This imports all the layers for "derive" into deriveLayers1
deriveLayers = Framer.Importer.load "imported/derive"


#Make all the imported layers available on the root
#for layerGroupName of deriveLayers
	#print layerGroupName
#   window[layerGroupName] = deriveLayers[layerGroupName]
# 
# for layerGroupName of deriveLayers
#   deriveLayers[layerGroupName].originalFrame = window[layerGroupName].frame

Framer.Defaults.Animation = 
  time: 0.2
  curve: 'spring'
  curveOptions:
    tension: 500
    friction: 35
    velocity: 10
  
Cover = deriveLayers.Cover
buggyHome = deriveLayers.Home
buggyHome.opacity=0
Home = HomeLayers.Home

Cover.opacity = 1

Home.opacity = 1
Home.width = 640
Home.height = 1136
Home.x=0
Home.y=0
#Home.clip = true
    
# Cover only draggable horizontally
Cover.draggable.enabled = true
Cover.draggable.speedY = 0

# A couple shortcut functions
Layer::fadeIn = ->
  this.animate
    properties: 
      opacity: 1
    curve: 'ease-in-out'
    time: 0.1

Layer::fadeOut = ->
  this.animate
    properties: 
      opacity: 0
    curve: 'ease-in-out'
    time: 0.1


changeScene = (scene) ->
	Home.fadeIn()
        
Cover.on Events.DragEnd, ->
	if Cover.x < -80 
	    # Dragged enough, move to the next slide after a delay
		Cover.animate
			properties:
				x: -640
			time: 0.2
			curve: 'ease-out'
	else
    # Not dragged enough, move it back
		Cover.animate
			properties:
				x: 0
		time: 0.2
		curve: 'ease-out'


