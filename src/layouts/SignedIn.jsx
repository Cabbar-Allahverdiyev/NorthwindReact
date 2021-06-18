import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.6435-9/150669148_1539039689820801_6803325565772671682_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pHLZ9BDjXEoAX8k1K24&_nc_ht=scontent.fgyd3-1.fna&oh=ffdfbaa85afa05d948043a3cc933334f&oe=60E5ABCA"/>
                <Dropdown pointing="top left" text="Cabbar" >
                    <Dropdown.Menu>
                    <Dropdown.Item text="Məlumatlarım" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Cıxış" icon="info"/>
                   
                    </Dropdown.Menu>
                   
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
