# MilkPlus


Steps to Create .apk file 

Step 1: 
	 cd android/

Step 2:
	./gradlew bundleRelease

Step 3:
	cd ..

Step 4:
	npx react-native run-android --variant=release

Step 5:
	take .apk file from following path :- MilkPlus/android/app/build/outputs/apk/release