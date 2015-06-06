/*
 * XenForo follow.min.js
 * Copyright 2010-2014 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
(function(c){XenForo.UnfollowLink=function(a){this.__construct(a)};XenForo.UnfollowLink.prototype={__construct:function(a){this.$link=a.click(c.context(this,"eClick"));this.userId=a.data("userid");this.jsonUrl=a.data("jsonurl")||a.attr("href");if(this.userId===null||this.jsonUrl===null)return console.warn("Unfollow link found without userId or url defined. %o",a),!1;this.$container=c("#user_list_"+this.userId)},eClick:function(a){a.preventDefault();this.stopFollowing()},stopFollowing:function(){XenForo.ajax(this.jsonUrl,
{user_id:this.userId,_xfConfirm:1},c.context(this,"stopFollowingSuccess"))},stopFollowingSuccess:function(a){if(XenForo.hasResponseError(a))return!1;this.$container.xfRemove()}};XenForo.FollowForm=function(a){this.__construct(a)};XenForo.FollowForm.prototype={__construct:function(a){this.$form=a.bind("AutoValidationComplete",c.context(this,"ajaxCallback"));this.$userInputField=this.$form.find(this.$form.data("userinputfield"))},ajaxCallback:function(a){a.preventDefault();if(XenForo.hasResponseError(a.ajaxData))return!1;
var d=a.ajaxData.userIds.split(","),e=null,b=0;this.$userInputField.val("").focus();for(b=0;b<d.length;b++)this.$form.find("#user_list_"+d[b]).length==0&&($templateHtml=c(a.ajaxData.users[d[b]]),e?$templateHtml.xfInsert("insertAfter",e):$templateHtml.xfInsert("prependTo",".FollowList")),e="#user_list_"+d[b]}};XenForo.register("a.UnfollowLink","XenForo.UnfollowLink");XenForo.register("form.FollowForm","XenForo.FollowForm")})(jQuery,this,document);
