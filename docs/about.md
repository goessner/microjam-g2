---
"layout": "page",
"title": "About",
"date": "2020-04-26",
"description": "About using g2 with microjam",
"tags": ["microjam","Jamstack","static page","vector graphics","g2"],
"category": ["web","graphics"]
---

# About

A custom html element `<g-2>` with a predefined set of supported attributes can be injected in `html` as well as in `md` documents.

On top of that we get seamless integration into the markdown preview window of VSCode. 

<figure>
<g-2 id='g' width="128" height="128" cartesian x0="64" y0="-10" darkmode interactive>
{ 
"main":[
    {"c":"use","a":{"grp":"jam","x":0,"y":0,"scl":0.4}}
  ],
"jam":[
    {"c":"drw","a":{"d":"M0,30L80,30Q100,30 100,50L100,250L80,270L-80,270L-100,250L-100,50Q-100,30 -80,30Z","lw":10,"fs":"#ee431b","ls":"black"}},
    {"c":"drw","a":{"d":"M0,300L70,300L110,270Q60,220 20,260Q0,280-20,260Q-65,200-110,270L-70,300Z","lw":10,"fs":"white","ls":"black","lj":"round"}},
    {"c":"drw","a":{"d":"M0,340L60,340Q90,340 90,320L90,300L-90,300L-90,320Q-90,340-60,340Z","lw":10,"fs":"#35682d","ls":"black","lj":"round"}},
    {"c":"txt","a":{"str":"μ","x":0,"y":120,"font":"175px cursive","thal":"center","fs":"#000"}}
]
}
</g-2>
  <figcaption>&mu;Jam Icon</figcaption>
</figure>

The graphics commands are embedded inside of `<g-2>` element in `JSON` format.

```xml
<g-2 id='g' width="128" height="128" cartesian x0="64" y0="-10">
   { "main":[ /* g2 json format */ ] }
</g-2>

```

<svg width="126" height="20">
    <rect rx="3" fill="#555" width="126" height="20"/>
    <rect rx="3" fill="#35682d" width="39" x="87" height="20"/>
    <g font-size="11" font-family="Verdana,Geneva,sans-serif" fill="#fff">
        <text x="6" y="14">dependencies</text>
        <text x="92" y="14">none</text>
    </g>
</svg>

