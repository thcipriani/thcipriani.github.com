var Subway = function(div, width, height) {
  var self = this;
  self.div = div;
  self.width = width;
  self.height = height;
  self.iconRadius = 18.5;

  self.init = function() {
    self.paper = Raphael(self.div, self.width, self.height);

    self.drawBack();
    self.drawPaths();
    self.drawIcons();
    self.drawStations();
    self.createAdditionalIcons();
  };

  self.drawBack = function() {
    var numOfSegments, segmentHeight, segmentWidth, line, line2;
    numOfSegments = 10;
    segmentHeight = self.height / numOfSegments;
    segmentWidth = self.width / numOfSegments;
    for (var i = 0, end = numOfSegments; i < end; i++) {
      line = self.paper.rect(0, i * segmentHeight, self.width, .5);
      line2 = self.paper.rect(i * segmentWidth, 0, .5, self.height);
      line.attr({
          'fill': 'none',
          'stroke': '#cccccc'
        });
      line2.attr({
          'fill': 'none',
          'stroke': '#cccccc'
        });
    }
  };

  self.drawPaths = function() {
    self.path('acomplish', 'M 40 55,L 82 92,L 118 92,L 118 189,L 404 189,L 663 358,L 884 358');
    self.path('edu', 'M 60 230,L 155 150, L 500 150, L 500 240, L 526 258, L 532 275, L 787 52, L 884 52');
    self.path('work', 'M 150 380,L 253 264, L 346 264, L 346 72, L 595 72, L 731 264, L 826 264, L 884 205');
  };

  self.drawIcons = function() {
    self.icon('acomplish',{x: 40 , y: 55});
    self.icon('edu',{x: 60 , y: 230});
    self.icon('work',{x: 150 , y: 380});
  };

  self.drawStations = function() {
    self.station('work',{x: 253 , y: 267},'WIN',{x: 209, y: 267},'r0');
    self.station('work',{x: 346, y: 264},'MRC',{x: 320, y: 295},'r-40');
    self.station('work',{x: 595, y: 72},'Custom\nChannels',{x: 562, y: 115},'r-40');

    self.station('edu',{x: 532, y: 275},'Bachelors\nEntre',{x: 489, y: 315},'r-40');
    self.station('edu',{x: 703, y: 126},'Mozilla\nRuby/Rails',{x: 728, y: 155},'r-40');
    self.station('edu',{x: 787, y: 55},'Python Instructor',{x: 707, y: 55},'r0');
    self.station('edu',{x: 884, y: 52},'HTML5\nGame Dev',{x: 860, y: 98},'r-40');

    self.station('acomplish',{x: 82, y: 92},'Born',{x: 105, y: 62},'r-40');
    self.station('acomplish',{x: 289, y: 189},'A+\nCert',{x: 280, y: 215},'r-40');
    self.station('acomplish',{x: 663, y: 358},'100K View/mo.\nWP Theme',{x: 589, y: 368},'r0');
    self.station('acomplish',{x: 780, y: 358},'CSS3\nCoverflow',{x: 810, y: 308},'r-40');
    self.station('acomplish',{x: 884, y: 358},'HTML5\niPhone',{x: 900, y: 308},'r-40');
  };

  self.icon = function(cat, loc) {
    var letter, color, icon;
    switch(cat) {
      case 'work': 
        letter = 'W';
        color = '#00AEEF'
        break;
      case 'edu': 
        letter = 'E';
        color = '#35A353'
        break;
      case 'acomplish': 
        letter = 'A';
        color = '#EC008C'
        break;
    }
   iconBack = self.paper.circle(loc.x, loc.y, self.iconRadius + 4).attr({'fill': '#ffffff', 'stroke': color, 'stroke-width': 3}).toFront();
   icon = self.paper.circle(loc.x, loc.y, self.iconRadius).attr({'fill': color, 'stroke': 'none'}).toFront();
   letterOnIcon = self.paper.text(loc.x, loc.y, letter).attr({'font-family':'Helvetica','fill':'#ffffff','font-size':28,'font-weight':'bold'});
  };

  self.path = function(cat, path) {
    switch(cat) {
      case 'work': 
        color = '#00AEEF'
        break;
      case 'edu': 
        color = '#35A353'
        break;
      case 'acomplish': 
        color = '#EC008C'
        break;
    }

    line = self.paper.path(path).attr({'fill': 'none','stroke': color, 'stroke-width':10, 'stroke-linejoin':'round', 'stroke-linecap':'round'});
  };

  self.station = function(cat, loc, text, textLoc, angle) {
    var stationRadius = 14, station, tex;
    switch(cat) {
      case 'work': 
        color = '#00AEEF'
        break;
      case 'edu': 
        color = '#35A353'
        break;
      case 'acomplish': 
        color = '#EC008C'
        break;
    }

    station = self.paper.circle(loc.x, loc.y, stationRadius).attr({'fill': color, 'stroke': '#fff', 'stroke-width': 5}).toFront();
    tex = self.paper.text(textLoc.x, textLoc.y, text).attr({'fill': '#444444', 'stroke': 'none', 'font-family':'Helvetica','font-size': 14,'font-weight':'bold'}).transform(angle);
  };


  self.createAdditionalIcons = function() {
    //Create Work Icons
    $('.work').each(function(i,icon) {
      var its = Raphael($(this)[0], 47, 47);
      var icBack = its.circle(20.5, 20.5, 18.5).attr({'fill': '#ffffff', 'stroke': '#00AEEF', 'stroke-width': 3}).toFront();
      var ic = its.circle(20.5, 20.5, 15).attr({'fill': '#00AEEF', 'stroke': 'none'}).toFront();
      var letter = its.text(20.5, 20.5, 'W').attr({'font-family':'Helvetica','fill':'#ffffff','font-size':20,'font-weight':'bold'});
    });

    $('.edu').each(function(i,icon) {
      var its = Raphael($(this)[0], 47, 47);
      var icBack = its.circle(20.5, 20.5, 18.5).attr({'fill': '#ffffff', 'stroke': '#35A353', 'stroke-width': 3}).toFront();
      var ic = its.circle(20.5, 20.5, 15).attr({'fill': '#35A353', 'stroke': 'none'}).toFront();
      var letter = its.text(20.5, 20.5, 'E').attr({'font-family':'Helvetica','fill':'#ffffff','font-size':20,'font-weight':'bold'});
    });

    $('.acomplish').each(function(i,icon) {
      var its = Raphael($(this)[0], 47, 47);
      var icBack = its.circle(20.5, 20.5, 18.5).attr({'fill': '#ffffff', 'stroke': '#EC008C', 'stroke-width': 3}).toFront();
      var ic = its.circle(20.5, 20.5, 15).attr({'fill': '#EC008C', 'stroke': 'none'}).toFront();
      var letter = its.text(20.5, 20.5, 'A').attr({'font-family':'Helvetica','fill':'#ffffff','font-size':20,'font-weight':'bold'});
    });

  };

  self.init();
};

jQuery(function() {
  var sub = new Subway('subway',950,410);
});
