// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  float voltaje = random(1,5);
  float corriente = random(6,10);
  float potencia = random(11,15);
  Serial.println(voltaje);
  Serial.println(corriente);
  Serial.println(potencia);
  delay(800);        // delay in between reads for stability
}
