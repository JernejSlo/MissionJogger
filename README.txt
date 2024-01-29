This is a prototype version of the MissionJogger app and with that come some limitations.
The app doesn't actually connect to any external devices even if the app states doing so.

!!!  Testing done on IPhone only, Android phones may not work as intended  !!!
!!!  Font errors appear on one or two pages, but they are to be ignored. Fonts load normally so there is no error  !!!
To run this app:
1. download expo go on your phone
2. in terminal move to the directory local-path-to-directory/MissionJogger
3. write "npx expo start" and run the app
4. connect your phone to the same wireless connection as your phone and scan the qr code in the terminal
    4.1 if you have a computer connected on lan or just cannot be on the same wifi add --tunnel to the previous command.
        this will result in slower loading, but the app should remain functional.
5. wait for app to load and use as you wish

note:
- The app doesn't contain any application breaking bugs (to my knowledge), however a new connection might not appear
    on the dashboard as soon as you navigate back from ADD DEVICE
- The BMP and calories are a simulation, no actual tracking is being done

Video of the app during testing:
- https://youtu.be/Ct-ZXgCbo8E
