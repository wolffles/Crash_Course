#CSS NOTES
# GENERAL
  * box model: everything in the dom renders elements on your page, it renders everything as a box
  * boxes will fill the width of parent by 100% with padding. if you set the width they will pertrude out.  (seems like by default its a border-box if yous set width its a content-box)
# SYNTAX 
  * selector is the element used to select the element
  * property:value; pairs within the {}

## types of selectors
  * class : .<class>
  * id : #<id>
  * element : <element>

#combining selectors 
  * combination: element.class => a element with a specific tag no space.
  * child of: div p.class{} => all p tags with a class inside of div tags.
  * sharing multiple selector: .big, .large{} => shares between both classes.
  * all: * selector. 

# PROPERTIES
  * box-sizing: <prop>
    - content-box (default)
    - border-box (selects size based on content+padding+border)


