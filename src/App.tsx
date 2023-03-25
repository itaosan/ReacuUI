import { Text } from "./libs/Text"
import { Heading } from "./libs/Heading"
import { Button } from "./libs/Button"
import { Textarea } from "./libs/Textarea"
import { Input } from "./libs/Input"
import { PasswordForm } from "./libs/PasswordForm"

export const App = () => {
    return(
        <>
            <Text text= "ほいちゃん" />
            <Heading tag="h1">見出し</Heading>
            <Heading tag="h1">
                <span>hello world!!!</span>
            </Heading>
            <Button onClick={() => console.log('clicked')} title="Button" type="primary" width={96} />
            <Button onClick={() => console.log('clicked')} title="Button" type="secondary" />
            <Button onClick={() => console.log('clicked')} title="Button" type="error"  />
            <br />
            <Textarea width={200} maxLength={50} />
            <Input type="text" />
            <PasswordForm onSubmit={(password) => {console.log(password)}} />
        </>
    )
}