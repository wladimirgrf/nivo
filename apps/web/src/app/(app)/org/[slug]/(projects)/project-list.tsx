import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Project 01</CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum
            dicta, culpa cupiditate debitis reiciendis blanditiis nesciunt
            recusandae tenetur commodi eius animi unde deserunt, voluptatum
            soluta quaerat labore in autem!
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/wladimirgrf.png" />
            <AvatarFallback />
          </Avatar>

          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Wlad Wasalsk</span> a
            day ago
          </span>

          <Button size="xs" variant="outline" className="ml-auto">
            View <ArrowRight className="ml-2 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
