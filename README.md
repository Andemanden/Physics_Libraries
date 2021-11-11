# Physics_Libraries Project
**Husk at opdele koden i forskellige headerfiler og indsæt dem i main/index.html:**
~~~~ HTML
<script language="javascript" type="text/javascript" src="_FILNAVN></script>
~~~~

## Ideer
### Rullende bold
- Bold falder ned af bakke 
- Gælder om hastighed 
- Powerups:
   - slow motion
- Cloths/springs til æstetik eller evt. bremsning - målflag (ish)
- Broer: springs 


### Hockey spil
- Kamera ser oppefra
- Lav friktions hockey puck
- Powerups/forskellige gamemodes
- Evt. online? (ambitiøst!), men kunne fungere (Websockets til central server på lokalt netværk)

### 3D: rullende bold gennem labyrint
*Eksempelvis:*

<img src="https://i.pinimg.com/originals/e8/1b/b3/e81bb35efd3371f1626e28c566f859dc.jpg" style="width: 300px">
- To knapper per hånd styrer den - man ser oppefra
- Bolden ruller - friktion og sammenstød med vægge, jord osv.
- Gælder om at ramme hullet hurtigst

## Planer for program
Simple former (classes) der kan bruges med kamera.
Box, Circle.
Manipulering sker gennem deres "body" parameter. f.eks. body.position.x, body.velocity.x osv.
Bredde og højde kan ikke justeres. Ellers finder vi ud af det.

## Maskiner vi skal lave. Aktiveres med et knaptryk, lav en "activate" funktion som trigger den:  
- Piston (Felix)
- Rotator (motor) (Andreas)
- Blæser (Kristian)
- Port (Adam)
- Fjeder med platform (enkelt aktivation, kan kun køre en gang) (Den der vil)
   - Skriv activate() funktion, tjek om det er gjort.

## Andet shit:
- Pitfall (materiale som dræber bold)
- Mål og generelt gameplay (gøres sammen)