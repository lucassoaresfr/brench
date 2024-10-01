peso = float(input("digite sua peso em kilocalorias(KG):\n"))
altura = float(input("digite sua altura:\n"))
imc = peso / pow(altura, 2)

print(f"Seu IMC é {imc:.2f}")

if imc < 18.5:
    print("Voce está abaixo do peso ideal.")
elif 18.5 <= imc < 24.9:
    print("Voce está no peso ideal.")
elif 25 <= imc < 29.9:
    print("Voce está sobrepeso.")
elif 30 <= imc < 34.9:
    print("Voce está com obesidade de grau I")
elif 35 <= imc < 39.9:
    print("Voce está com obesidade de grau II")        