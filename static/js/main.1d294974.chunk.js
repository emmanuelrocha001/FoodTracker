(this["webpackJsonpfood-tracker"]=this["webpackJsonpfood-tracker"]||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/left-arrow.d5f28d66.svg"},137:function(e,t,a){e.exports=a.p+"static/media/right-arrow.03316393.svg"},138:function(e,t,a){e.exports=a.p+"static/media/close.c639de82.svg"},150:function(e,t,a){e.exports=a.p+"static/media/refresh.70a48665.svg"},151:function(e,t,a){e.exports=a.p+"static/media/close-white.d9560695.svg"},152:function(e,t,a){e.exports=a.p+"static/media/add-dark.bc62abcf.svg"},153:function(e,t,a){e.exports=a.p+"static/media/check-green.459ce075.svg"},154:function(e,t,a){e.exports=a.p+"static/media/cross-red.e4c8e4ee.svg"},185:function(e,t,a){e.exports=a(373)},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.53e6d68a.svg"},369:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(49),i=a.n(r),s=(a(190),a(50)),c=a(51),o=a(6),d=a(155),m=a(156),u=(a(191),a(192),a(193),a(34)),h=a(33),g=a.n(h);a(136),a(137),a(138);var E=function(e){var t="ButtonOutside",a="white";return null!=e.styleClassNameOuter&&(t=e.styleClassNameOuter),null!=e.outerColor&&(a=e.outerColor),!0===e.edit?l.a.createElement("div",{className:t,onClick:function(){return e.actionHandler(e.fieldName)},style:{width:e.containerSize,height:e.containerSize,background:a,borderRadius:"50%",transitionDuration:"0s"}},l.a.createElement("img",{className:e.styleClassName,src:e.imageSource,style:{width:e.imageSize,height:e.imageSize}})):l.a.createElement("div",{className:t,onClick:e.actionHandler,style:{width:e.containerSize,height:e.containerSize,background:a,borderRadius:"50%",transitionDuration:"0s"}},l.a.createElement("img",{className:e.styleClassName,src:e.imageSource,style:{width:e.imageSize,height:e.imageSize}}))};var p=function(e){return!1===e.isStatic?l.a.createElement("div",{className:"Item",onClick:function(){e.handleItemScreenToggle(e.mealName)}},l.a.createElement("p",{className:"ItemName"},"Potato"),l.a.createElement("div",{className:"ItemDescription"},l.a.createElement("p",{className:"LeftItemDescription"},"Generic, 1 Potato"),l.a.createElement("p",{className:"RightItemDescription"},"30"))):l.a.createElement("div",{className:"ItemStatic"},l.a.createElement("p",{className:"ItemName"},"Potato"),l.a.createElement("div",{className:"ItemDescription"},l.a.createElement("p",{className:"LeftItemDescription"},"generic, 1 potato"),l.a.createElement("p",{className:"RightItemDescription"},"30 cal")))},N=a(150),f=a.n(N);var S=function(e){return l.a.createElement("div",{className:"LoadingIconContainer"},l.a.createElement("img",{src:f.a,className:"LoadingIcon"}))},v=a(151),I=a.n(v);var C=function(e){return l.a.createElement("div",{className:"ExternalScreenTopContainer"},l.a.createElement("p",{className:"ExternalScreenTitleText"},e.screenTitle),null!==e.exitHandler&&l.a.createElement("div",{className:"ExitButtonContainer"},l.a.createElement(E,{styleClassName:"Exit",outerColor:"#393e46",containerSize:"32px",imageSize:"16px",imageSource:I.a,actionHandler:e.exitHandler})))};var P=function(e){return!0===e.loadingExternal?l.a.createElement("div",{className:"ExternalScreenBottomContainer"},l.a.createElement(S,null)):l.a.createElement("div",{className:"ExternalScreenBottomContainer",onClick:e.actionHandler},l.a.createElement("p",{className:"ExternalButtonText"},e.buttonText))};var x=a(54),T=a.n(x),b=a(55),w=a.n(b),y=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"shorten",value:function(e){return e.length>40?e.substring(0,40)+"...":e}},{key:"formatDate",value:function(e){return((e.getMonth()+1).toString().length<2?"0"+(e.getMonth()+1).toString():(e.getMonth()+1).toString())+"/"+(e.getDate().toString().length<2?"0"+e.getDate().toString():e.getDate().toString())+"/"+e.getFullYear().toString()}},{key:"toTitleCase",value:function(e){var t=e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");return t.length>35?t.substring(0,35):t}},{key:"toNumberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}]),e}(),D=new y;var k=function(e){var t=new Date,a=t.getTime();a-=864e5;var n=new Date(a);a+=1728e5;var r=new Date(a),i=D.formatDate(t),s=D.formatDate(n),c=D.formatDate(r),o=D.formatDate(e.currentDate),d="";return d=o===i?"Today":o===s?"Yesterday":o===c?"Tomorrow":o,l.a.createElement("div",{className:"CalendarDateContainer"},l.a.createElement("div",{className:"DateContainer"},l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(E,{containerSize:"32px",imageSize:"16px",imageSource:T.a,actionHandler:e.handleDateDecrement})),l.a.createElement("div",{className:"CurrentDate"},d),l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(E,{containerSize:"32px",imageSize:"16px",imageSource:w.a,actionHandler:e.handleDateIncrement}))),l.a.createElement("div",{className:"CalendarContainer"},l.a.createElement("input",{onChange:e.handleDateChange,className:"Calendar",type:"date"})))},F=(a(369),a(152)),O=a.n(F);function L(e){return l.a.createElement("div",{className:"MealContainer"},l.a.createElement("div",{className:"LeftTitle"},e.mealTitle),l.a.createElement(p,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement(p,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement(p,{handleItemScreenToggle:e.handleItemScreenToggle,mealName:e.mealTitle,isStatic:!1}),l.a.createElement("div",{className:"AddButtonContainer"},l.a.createElement(E,{outerColor:"white",styleClassName:"Add",containerSize:"32px",imageSize:"22px",imageSource:O.a,styleClassNameOuter:"AddButtonOuter",actionHandler:e.handleSearchScreenToggle})))}var M=function(e){return l.a.createElement("div",{className:"Body"},l.a.createElement(L,{mealTitle:"Breakfast",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Lunch",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Dinner",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}),l.a.createElement(L,{mealTitle:"Other",handleSearchScreenToggle:e.handleSearchScreenToggle,handleItemScreenToggle:e.handleItemScreenToggle}))},H=a(79),A=a.n(H),j=a(153),R=a.n(j),z=a(154),B=a.n(z);var U=function(e){return l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},e.fieldName),e.currentFieldEditName!==e.fieldName&&l.a.createElement("p",{className:"RightProfile"},e.fieldContent," "),e.currentFieldEditName===e.fieldName&&"Weight"!==e.currentFieldEditName&&l.a.createElement("div",{className:"EditInputFieldContainer"},l.a.createElement("input",{className:"EditInputField",type:"text",onBlur:e.handleEditProfile,placeholder:"",onChange:e.handleEditInputChange})),e.currentFieldEditName===e.fieldName&&"Weight"===e.currentFieldEditName&&l.a.createElement("div",{className:"EditInputFieldContainer"},l.a.createElement("input",{className:"EditInputField",type:"text",inputmode:"numeric",placeholder:"",onChange:e.handleEditInputChange})),""===e.currentFieldEditName&&l.a.createElement(E,{styleClassNameOuter:"EditOuter",outerColor:"white",containerSize:"32px",imageSize:"18px",imageSource:A.a,actionHandler:e.handleEditFieldNameToggle,edit:!0,fieldName:e.fieldName}),e.currentFieldEditName===e.fieldName&&l.a.createElement("div",{className:"ProfileEditActionContainer"},l.a.createElement(E,{styleClassNameOuter:"EditOuterQuit",outerColor:"white",containerSize:"32px",imageSize:"18px",imageSource:B.a,actionHandler:e.handleQuitEditProfile}),l.a.createElement(E,{styleClassNameOuter:"EditOuterCheck",outerColor:"white",containerSize:"32px",imageSize:"18px",imageSource:R.a,actionHandler:e.handleEditProfile})))};a(370);var Q=function(e){var t=e.user.avatar;return l.a.createElement("div",{className:"DarkBackground"},l.a.createElement("div",{className:"ExternalScreenContainer"},l.a.createElement(C,{screenTitle:"Profile",exitHandler:e.handleShowProfile}),l.a.createElement("div",{className:"ExternalScreenMiddleContainer"},l.a.createElement("div",{className:"Buffer"}),l.a.createElement("div",{className:"ProfileScreenPicContainer"},l.a.createElement("div",{className:"ProfileScreenPic",style:{backgroundImage:'url(" '+t+'")'}})),l.a.createElement("div",{className:"ProfileContentContainer"},l.a.createElement(U,{fieldName:"First",fieldContent:e.user.firstName,handleEditFieldNameToggle:e.handleEditFieldNameToggle,currentFieldEditName:e.currentFieldEditName,handleEditProfile:e.handleEditProfile,handleEditInputChange:e.handleEditInputChange,handleQuitEditProfile:e.handleQuitEditProfile}),l.a.createElement(U,{fieldName:"Last",fieldContent:e.user.lastName,handleEditFieldNameToggle:e.handleEditFieldNameToggle,currentFieldEditName:e.currentFieldEditName,handleEditProfile:e.handleEditProfile,handleEditInputChange:e.handleEditInputChange,handleQuitEditProfile:e.handleQuitEditProfile}),l.a.createElement(U,{fieldName:"Weight",fieldContent:e.user.weight+" lbs.",handleEditFieldNameToggle:e.handleEditFieldNameToggle,currentFieldEditName:e.currentFieldEditName,handleEditProfile:e.handleEditProfile,handleEditInputChange:e.handleEditInputChange,handleQuitEditProfile:e.handleQuitEditProfile}),l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},"Email"),l.a.createElement("p",{className:"RightProfile"},e.user.email)),l.a.createElement("div",{className:"ProfileInfoContainer"},l.a.createElement("div",{className:"LeftProfile"},"ID"),l.a.createElement("p",{className:"RightProfile"},e.user.userId)))),l.a.createElement(P,{buttonText:"Sign Out",loadingExternal:e.loadingExternal,actionHandler:e.handleSignOff})))};var W=function(e){return!0===e.haveAccount?l.a.createElement("div",{className:"DarkBackground"},l.a.createElement("div",{className:"ExternalScreenContainer"},l.a.createElement(C,{screenTitle:"Welcome",exitHandler:null}),l.a.createElement("div",{className:"ExternalScreenMiddleContainer"},l.a.createElement("div",{className:"Buffer"}),l.a.createElement("div",{className:"LogoIsolatedContainer"},l.a.createElement("img",{className:"LogoIsolated",src:g.a})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Email",onChange:e.handleEmailInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"password",placeholder:"Password",onChange:e.handlePasswordInputChange})),l.a.createElement("div",{className:"InfoContainer",style:{width:"100%"}},l.a.createElement("div",{class:"g-signin2","data-onsuccess":"onSignIn"})),l.a.createElement("p",{className:"NoAccountText",onClick:e.handleHaveAccountToggle},"Don't have an account? Sign up here!"),""!=e.error&&l.a.createElement("p",{className:"LoginError"},e.error),""!=e.successMessage&&l.a.createElement("p",{className:"SuccessMessage"},e.successMessage)),l.a.createElement(P,{buttonText:"Sign In",loadingExternal:e.loadingExternal,actionHandler:e.handleSignIn}))):l.a.createElement("div",{className:"DarkBackground"},l.a.createElement("div",{className:"ExternalScreenContainer"},l.a.createElement(C,{screenTitle:"Welcome",exitHandler:null}),l.a.createElement("div",{className:"ExternalScreenMiddleContainer"},l.a.createElement("div",{className:"Buffer"}),l.a.createElement("div",{className:"LogoIsolatedContainer"},l.a.createElement("img",{className:"LogoIsolated",src:g.a})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"First Name",onChange:e.handleFirstNameInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Last Name",onChange:e.handleLastNameInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"text",placeholder:"Email",onChange:e.handleEmailInputChange})),l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("input",{className:"InfoInput",type:"password",placeholder:"Password",onChange:e.handlePasswordInputChange})),l.a.createElement("div",{className:"PicUploaderContainer"},l.a.createElement("input",{className:"PicUploader",type:"file",accept:"image/png, image/jpeg, image/jpg",onChange:e.handleProfilePicUpload})),l.a.createElement("p",{className:"NoAccountText",onClick:e.handleHaveAccountToggle},"Already have an account? Sign in here!"),""!==e.error&&l.a.createElement("p",{className:"LoginError"},e.error),""!==e.successMessage&&l.a.createElement("p",{className:"SuccessMessage"},e.successMessage)),l.a.createElement(P,{buttonText:"Sign Up",loadingExternal:e.loadingExternal,actionHandler:e.handleSignUp})))},J=(a(371),a(80)),V=a.n(J),q=new y;function G(e){return l.a.createElement("div",{className:"Item"},void 0!==e.topLeft&&l.a.createElement("p",{className:"ItemName"},e.topLeft),l.a.createElement("div",{className:"ItemDescription"},void 0!==e.bottomLeft&&l.a.createElement("p",{className:"LeftItemDescription"},q.shorten(e.bottomLeft)),l.a.createElement("p",{className:"RightItemDescription"},Math.round(e.bottomRight))))}function Y(e){var t=e.results.map((function(e){return l.a.createElement("div",null,!0===isNaN(e)&&l.a.createElement(G,{topLeft:e.topLeft,bottomLeft:e.bottomLeft,bottomRight:e.bottomRight,fdcId:e.fdcId,key:e.fdcId}))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"LeftTitle",style:{fontSize:"15px",marginBottom:"30px"}},"Top Results (",q.toNumberWithCommas(e.totalHits.toString())," total results)"),t)}var K=function(e){return l.a.createElement("div",{className:"DarkBackground"},l.a.createElement("div",{className:"ExternalScreenContainer"},l.a.createElement(C,{screenTitle:"Powered by FoodData Central",exitHandler:e.handleSearchScreenToggle}),l.a.createElement("div",{className:"ExternalScreenMiddleContainer"},l.a.createElement("div",{className:"Buffer"}),l.a.createElement("div",{className:"SearchBarContainer"},l.a.createElement("input",{className:"SearchBar",type:"text",onChange:e.handleQueryChange,onKeyPress:e.handleEnterSearch}),l.a.createElement("img",{className:"SearchIcon",src:V.a})),void 0!==e.results&&e.results.length>0&&l.a.createElement(Y,{results:e.results,topResults:e.topResults,pageSize:e.pageSize,currentPage:e.currentPage,totalHits:e.totalHits}),void 0!==e.results&&e.results.length>0&&l.a.createElement("div",{className:"resultPagePicker"},l.a.createElement("div",{className:"DateContainer"},l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(E,{outerColor:"white",containerSize:"32px",imageSize:"16px",imageSource:T.a,actionHandler:e.handlePageDecrement})),l.a.createElement("div",{className:"CurrentDate"},e.currentPage),l.a.createElement("div",{className:"ArrowButtonContainer"},l.a.createElement(E,{outerColor:"white",containerSize:"32px",imageSize:"16px",imageSource:w.a,actionHandler:e.handlePageIncrement}))))),l.a.createElement(P,{buttonText:"Search",loadingExternal:e.loadingExternal,actionHandler:e.handleQuery})))};a(372),new y;function $(e){return l.a.createElement("div",{className:"ExternalScreen"},l.a.createElement("div",{className:"HideNutritionButton",onClick:e.handleNutritionScreenToggle},"Hide Nutrition \u25b2"),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Saturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"2.5 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Trans Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Polyunsaturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Monounsaturated Fat"),l.a.createElement("p",{className:"NutrientRight"},"0 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Cholesterol"),l.a.createElement("p",{className:"NutrientRight"},"0 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Sodium"),l.a.createElement("p",{className:"NutrientRight"},"225 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Dietary Fiber"),l.a.createElement("p",{className:"NutrientRight"},"1 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Sugar"),l.a.createElement("p",{className:"NutrientRight"},"20 g")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin D"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Calcium"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Iron"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Pottasium"),l.a.createElement("p",{className:"NutrientRight"},"0 mg")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin A"),l.a.createElement("p",{className:"NutrientRight"},"0 %")),l.a.createElement("div",{className:"Nutrient"},l.a.createElement("p",{className:"NutrientLeft"},"Vitamin C"),l.a.createElement("p",{className:"NutrientRight"},"0 %")))}function X(e){var t=[{name:"Carbs",value:40},{name:"Fat",value:10},{name:"Protein",value:2}],a=["#393E46","#f3c623","#848484"];return l.a.createElement("div",{className:"CalMacroContainer"},l.a.createElement(u.c,{className:"Pie",width:90,height:90},l.a.createElement(u.b,{animationDuration:900,animationBegin:100,data:t,innerRadius:22,outerRadius:30,fill:"#FFFFFF",paddingAngle:5},t.map((function(e,t){return l.a.createElement(u.a,{fill:a[t%a.length]})})))))}function Z(e){return l.a.createElement("div",{className:"Macro"},"Carbs"===e.name&&l.a.createElement("p",{className:"MacroPercentageCarbs"},e.percent,"%"),"Protein"===e.name&&l.a.createElement("p",{className:"MacroName"},e.percent,"%"),"Fat"===e.name&&l.a.createElement("p",{className:"MacroPercentageProtein"},e.percent,"%"),l.a.createElement("p",{className:"MacroGrams"},e.grams," g"),l.a.createElement("p",{className:"MacroName"},e.name))}function _(e){return l.a.createElement("div",{className:"MacrosContainer"},l.a.createElement(X,null),l.a.createElement(Z,{name:"Carbs",grams:40,percent:77}),l.a.createElement(Z,{name:"Fat",grams:10,percent:20}),l.a.createElement(Z,{name:"Protein",grams:2,percent:3}))}var ee=function(e){return!1===e.showNutrition?l.a.createElement("div",{className:"DarkBackground"},l.a.createElement("div",{className:"ExternalScreenContainer"},""===e.currentMeal&&l.a.createElement(C,{screenTitle:"Add Entry",exitHandler:e.handleItemScreenToggle}),""!==e.currentMeal&&l.a.createElement(C,{screenTitle:"Edit Entry",exitHandler:e.handleItemScreenToggle}),l.a.createElement("div",{className:"ExternalScreenMiddleContainer"},l.a.createElement("div",{className:"Buffer"}),!1===e.showItemAddition&&""!==e.currentMeal&&l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Meal"),l.a.createElement("select",{className:"MealSelector"},l.a.createElement("option",{className:"MealSelectorChoice",value:"breakfast"},"Breakfast"),l.a.createElement("option",{className:"MealSelectorChoice",value:"lunch"},"Lunch"),l.a.createElement("option",{className:"MealSelectorChoice",value:"dinner"},"Dinner"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"Other"))),l.a.createElement(p,{mealName:"",isStatic:!0}),l.a.createElement(_,null),l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Serving size"),l.a.createElement("select",{className:"MealSelector"},l.a.createElement("option",{className:"MealSelectorChoice",value:"breakfast"},"1 g"),l.a.createElement("option",{className:"MealSelectorChoice",value:"lunch"},"1 cup, diced"),l.a.createElement("option",{className:"MealSelectorChoice",value:"dinner"},"1 oz"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 kg"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 large"),l.a.createElement("option",{className:"MealSelectorChoice",value:"other"},"1 small"))),l.a.createElement("div",{className:"ItemInput"},l.a.createElement("p",{className:"ItemInputLeft"},"Number of Servings"),l.a.createElement("input",{className:"NumberInput",value:1,type:"text",name:"token",id:"token",inputmode:"numeric",pattern:"[0-9]*",autocomplete:"one-time-code"})),l.a.createElement("div",{className:"ShowNutritionButton",onClick:e.handleNutritionScreenToggle},"Show Nutrition \u25bc")),!1===e.showItemAddition&&l.a.createElement(P,{buttonText:"Update",loadingExternal:e.loadingExternal,actionHandler:e.handleItemScreenToggle}),!0===e.showItemAddition&&l.a.createElement(P,{buttonText:"Add",loadingExternal:e.loadingExternal,actionHandler:e.handleItemScreenScreenToggle}))):l.a.createElement("div",{className:"DarkBackground"},l.a.createElement($,{handleNutritionScreenToggle:e.handleNutritionScreenToggle}))},te="https://food-tracker-api.herokuapp.com",ae=(new y,function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loadingExternal:!1,currentFieldEditName:"",editInput:"",results:[],detailedResults:[],currentPage:1,pageSize:5,totalHits:0,selectedDate:new Date,showItemAddition:!1,expandItem:!1,showNutrition:!1,currentUser:null,userInput:"",searchInput:"",emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:"",profilePicInput:null,currentMeal:"",loginError:"",successMessage:"",haveAccount:!0,showProfile:!1},n.handleDateChange=n.handleDateChange.bind(Object(o.a)(n)),n.handleDateDecrement=n.handleDateDecrement.bind(Object(o.a)(n)),n.handleDateIncrement=n.handleDateIncrement.bind(Object(o.a)(n)),n.handlePageIncrement=n.handlePageIncrement.bind(Object(o.a)(n)),n.handlePageDecrement=n.handlePageDecrement.bind(Object(o.a)(n)),n.handleSearchScreenToggle=n.handleSearchScreenToggle.bind(Object(o.a)(n)),n.handleItemScreenToggle=n.handleItemScreenToggle.bind(Object(o.a)(n)),n.handleNutritionScreenToggle=n.handleNutritionScreenToggle.bind(Object(o.a)(n)),n.handleHaveAccountToggle=n.handleHaveAccountToggle.bind(Object(o.a)(n)),n.handleShowProfile=n.handleShowProfile.bind(Object(o.a)(n)),n.handleEmailInputChange=n.handleEmailInputChange.bind(Object(o.a)(n)),n.handlePasswordInputChange=n.handlePasswordInputChange.bind(Object(o.a)(n)),n.handleFirstNameInputChange=n.handleFirstNameInputChange.bind(Object(o.a)(n)),n.handleLastNameInputChange=n.handleLastNameInputChange.bind(Object(o.a)(n)),n.handleProfilePicUpload=n.handleProfilePicUpload.bind(Object(o.a)(n)),n.handleQueryChange=n.handleQueryChange.bind(Object(o.a)(n)),n.handleEditInputChange=n.handleEditInputChange.bind(Object(o.a)(n)),n.handleSignIn=n.handleSignIn.bind(Object(o.a)(n)),n.handleSignOff=n.handleSignOff.bind(Object(o.a)(n)),n.handleSignUp=n.handleSignUp.bind(Object(o.a)(n)),n.handleQuery=n.handleQuery.bind(Object(o.a)(n)),n.handleEnterSearch=n.handleEnterSearch.bind(Object(o.a)(n)),n.handleEditFieldNameToggle=n.handleEditFieldNameToggle.bind(Object(o.a)(n)),n.handleEditProfile=n.handleEditProfile.bind(Object(o.a)(n)),n.handleQuitEditProfile=n.handleQuitEditProfile.bind(Object(o.a)(n)),n.handleScroll=n.handleScroll.bind(Object(o.a)(n)),n.setDetailedResults=n.setDetailedResults.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"handleEditInputChange",value:function(e){this.setState({editInput:e.target.value})}},{key:"handleQuitEditProfile",value:function(){this.setState({loadingExternal:!1,currentFieldEditName:"",editInput:""})}},{key:"handleEditProfile",value:function(){var e=this;if(""!==this.state.editInput){var t=[],a={First:"firstName",Last:"lastName",Weight:"weight"}[this.state.currentFieldEditName],n=this.state.editInput;t.push({propName:a,value:n});var l={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};this.setState({loadingExternal:!0}),fetch(te+"/user/"+this.state.currentUser.userId,l).then((function(e){return e.json()})).then((function(t){e.setState({currentUser:t.user,loadingExternal:!1,currentFieldEditName:"",editInput:""})})).catch((function(t){console.log(t),e.setState({loadingExternal:!1,currentFieldEditName:"",editInput:""})}))}else this.setState({loadingExternal:!1,currentFieldEditName:"",editInput:""})}},{key:"handleEditFieldNameToggle",value:function(e){this.setState({currentFieldEditName:e})}},{key:"setDetailedResults",value:function(){for(var e=this,t=this.state.pageSize*(this.state.currentPage-1),a=t+this.state.pageSize,n=this.state.results.slice(t,a),l="",r=0;r<n.length;r++)l=0===r?l+"?fdcids="+n[r]:l+"&fdcids="+n[r];this.setState({loadingExternal:!0});fetch(te+"/search/foods/"+l,{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.detailedResults.length<1){var n=e.state.results;n.splice(t,e.state.pageSize),e.setState({detailedResults:n}),e.setDetailedResults()}else e.setState({detailedResults:a.detailedResults,loadingExternal:!1})})).catch((function(e){console.log(e)}))}},{key:"handlePageDecrement",value:function(){if(this.state.currentPage-1>0){var e=this.state.currentPage-1;this.setState({currentPage:e}),this.setDetailedResults()}}},{key:"handlePageIncrement",value:function(){if(void 0!==this.state.results&&this.state.currentPage+1<=Math.ceil(this.state.results.length/this.state.pageSize)){var e=this.state.currentPage+1;this.setState({currentPage:e}),this.setDetailedResults()}}},{key:"handleEnterSearch",value:function(e){"Enter"===e.key&&this.handleQuery()}},{key:"handleScroll",value:function(e){e.preventDefault()}},{key:"handleQuery",value:function(){var e=this;if(""!==this.state.searchInput){this.setState({loadingExternal:!0});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:this.state.searchInput,pageSize:"150",pageNumber:"1"})};fetch(te+"/search/",t).then((function(e){return e.json()})).then((function(t){for(var a=0;a<e.state.pageSize;a++);t.results?(e.setState({results:t.results,totalHits:t.totalHits,loadingExternal:!1,currentPage:1}),e.setDetailedResults()):e.setState({results:[],totalHits:0,loadingExternal:!1,currentPage:1})})).catch((function(e){console.log(e),console.log("something went wrong with query")}))}}},{key:"handleQueryChange",value:function(e){this.setState({searchInput:e.target.value})}},{key:"handleSignOff",value:function(){this.setState({loadingExternal:!1,selectedDate:new Date,currentFieldEditName:"",currentEditInput:"",showItemAddition:!1,expandItem:!1,showNutrition:!1,currentUser:null,userInput:"",searchInput:"",currentPage:1,results:[],detailedResults:[],totalHits:0,emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:"",profilePicInput:null,currentMeal:"",loginError:"",successMessage:"",haveAccount:!0,showProfile:!1})}},{key:"handleSignIn",value:function(){var e=this;if(""===this.state.emailInput||""===this.state.passwordInput)this.setState({loginError:"Please make sure all fields are filled in"});else{var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.emailInput,password:this.state.passwordInput})};this.setState({loadingExternal:!0}),fetch(te+"/user/login",t).then((function(e){return e.json()})).then((function(t){e.setState({loadingExternal:!1}),!1===t.successful?e.setState({loginError:t.message}):(console.log(t.user),e.setState({currentUser:t.user}))})).catch((function(e){return console.log(e)}))}}},{key:"handleSignUp",value:function(){var e=this;if(""===this.state.firstNameInput||""===this.state.lastNameInput||""===this.state.emailInput||""===this.state.passwordInput||null===this.state.profilePicInput)this.setState({loginError:"Please make sure all fields are filled in"});else{this.setState({loadingExternal:!0});var t=new FormData;t.append("email",this.state.emailInput),t.append("password",this.state.passwordInput),t.append("firstName",this.state.firstNameInput),t.append("lastName",this.state.lastNameInput),t.append("avatar",this.state.profilePicInput),fetch(te+"/user/signup",{method:"POST",body:t,mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({loadingExternal:!1}),!1===t.successful?null!==t.message?e.setState({loginError:t.message,loadingExternal:!1}):e.setState({loginError:"Account failed to be created."}):(console.log(t),e.setState({successMessage:t.message,loginError:"",haveAccount:!0}))}))}}},{key:"handleProfilePicUpload",value:function(e){console.log(e.target.files[0]),this.setState({profilePicInput:e.target.files[0]})}},{key:"handleFirstNameInputChange",value:function(e){this.setState({firstNameInput:e.target.value})}},{key:"handleLastNameInputChange",value:function(e){this.setState({lastNameInput:e.target.value})}},{key:"handleEmailInputChange",value:function(e){this.setState({emailInput:e.target.value})}},{key:"handlePasswordInputChange",value:function(e){this.setState({passwordInput:e.target.value})}},{key:"handleShowProfile",value:function(){this.setState({showProfile:!this.state.showProfile})}},{key:"handleHaveAccountToggle",value:function(){this.setState({haveAccount:!this.state.haveAccount,loginError:"",successMessage:"",emailInput:"",passwordInput:"",firstNameInput:"",lastNameInput:""})}},{key:"handleNutritionScreenToggle",value:function(){this.setState({showNutrition:!this.state.showNutrition})}},{key:"handleItemScreenToggle",value:function(e){null!=e&&!1===this.state.expandItem&&this.setState({currentMeal:e}),this.setState({expandItem:!this.state.expandItem})}},{key:"handleSearchScreenToggle",value:function(e){this.setState({showItemAddition:!this.state.showItemAddition})}},{key:"handleDateIncrement",value:function(){var e=this.state.selectedDate.getTime(),t=new Date(e+=864e5);this.setState({selectedDate:t})}},{key:"handleDateDecrement",value:function(){var e=this.state.selectedDate.getTime(),t=new Date(e-=864e5);this.setState({selectedDate:t})}},{key:"handleDateChange",value:function(e){var t=e.target.value.substring(0,4),a=e.target.value.substring(5,7),n=e.target.value.substring(8,10),l=new Date(a+"/"+n+"/"+t);this.setState({selectedDate:l})}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Logo",src:g.a}),l.a.createElement("h1",null,"FoodPal"),null===this.state.currentUser&&l.a.createElement("div",{className:"UserIconHeader",style:{background:"white"}}),null!==this.state.currentUser&&l.a.createElement("div",{className:"UserIconHeader",onClick:this.handleShowProfile,style:{backgroundImage:'url(" '+this.state.currentUser.avatar+'")'}}),null!==this.state.currentUser&&l.a.createElement("p",{className:"UserNameHeader"},this.state.currentUser.firstName)),l.a.createElement(k,{currentDate:this.state.selectedDate,handleDateChange:this.handleDateChange,handleDateIncrement:this.handleDateIncrement,handleDateDecrement:this.handleDateDecrement}),l.a.createElement(M,{handleSearchScreenToggle:this.handleSearchScreenToggle,handleItemScreenToggle:this.handleItemScreenToggle,showItemAddition:this.state.showItemAddition}),null===this.state.currentUser&&l.a.createElement(W,{haveAccount:this.state.haveAccount,handleHaveAccountToggle:this.handleHaveAccountToggle,handleFirstNameInputChange:this.handleFirstNameInputChange,handleLastNameInputChange:this.handleLastNameInputChange,handleEmailInputChange:this.handleEmailInputChange,handlePasswordInputChange:this.handlePasswordInputChange,handleProfilePicUpload:this.handleProfilePicUpload,handleSignIn:this.handleSignIn,handleSignUp:this.handleSignUp,loadingExternal:this.state.loadingExternal,error:this.state.loginError,successMessage:this.state.successMessage}),!0===this.state.showItemAddition&&l.a.createElement(K,{userInput:this.state.userInput,handleSearchScreenToggle:this.handleSearchScreenToggle,handleItemScreenToggle:this.handleItemScreenToggle,loadingExternal:this.state.loadingExternal,searchInput:this.state.searchInput,handleQueryChange:this.handleQueryChange,handleQuery:this.handleQuery,handleEnterSearch:this.handleEnterSearch,results:this.state.detailedResults,totalHits:this.state.totalHits,currentPage:this.state.currentPage,handlePageDecrement:this.handlePageDecrement,handlePageIncrement:this.handlePageIncrement}),!0===this.state.expandItem&&l.a.createElement(ee,{handleItemScreenToggle:this.handleItemScreenToggle,currentMeal:this.state.currentMeal,showItemAddition:this.state.showItemAddition,handleNutritionScreenToggle:this.handleNutritionScreenToggle,showNutrition:this.state.showNutrition,loadingExternal:this.state.loadingExternal}),!0===this.state.showProfile&&l.a.createElement(Q,{user:this.state.currentUser,handleShowProfile:this.handleShowProfile,handleSignOff:this.handleSignOff,loadingExternal:this.state.loadingExternal,handleEditFieldNameToggle:this.handleEditFieldNameToggle,currentFieldEditName:this.state.currentFieldEditName,handleEditProfile:this.handleEditProfile,handleEditInputChange:this.handleEditInputChange,handleQuitEditProfile:this.handleQuitEditProfile}))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/left-arrow-dark.638c7d9e.svg"},55:function(e,t,a){e.exports=a.p+"static/media/right-arrow-dark.b8f99d82.svg"},79:function(e,t,a){e.exports=a.p+"static/media/edit-dark.de4b9705.svg"},80:function(e,t,a){e.exports=a.p+"static/media/search.fa0fe205.svg"}},[[185,1,2]]]);
//# sourceMappingURL=main.1d294974.chunk.js.map