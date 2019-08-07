#!/bin/bash

WKWEBVIEW_FILE="./platforms/ios/app/Plugins/cordova-plugin-ionic-webview/CDVWKWebViewEngine.m"

echo -e "" >> $WKWEBVIEW_FILE
echo -e "@implementation UIScrollView (NoBounce)" >> $WKWEBVIEW_FILE
echo -e "- (void)didMoveToWindow {" >> $WKWEBVIEW_FILE
echo -e "    [super didMoveToWindow];" >> $WKWEBVIEW_FILE
echo -e "    self.bounces = NO;" >> $WKWEBVIEW_FILE
echo -e "}" >> $WKWEBVIEW_FILE
echo -e "@end" >> $WKWEBVIEW_FILE
